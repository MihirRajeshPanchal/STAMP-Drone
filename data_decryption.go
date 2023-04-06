package main

import (
	"crypto/aes"
	"crypto/cipher"
	"crypto/rand"
	"encoding/json"
	"fmt"
	"io"
	"os"
)

func main() {
	// Read the encrypted JSON data from the file
	encryptedFile, err := os.Open("encrypted_data.json")
	if err != nil {
		fmt.Println(err)
	}
	defer encryptedFile.Close()

	var encryptedData []byte
	if err := json.NewDecoder(encryptedFile).Decode(&encryptedData); err != nil {
		fmt.Println(err)
	}

	// Generate a key and an initialization vector (IV) for decryption
	key := make([]byte, 32)
	if _, err := io.ReadFull(rand.Reader, key); err != nil {
		fmt.Println(err)
	}

	iv := make([]byte, aes.BlockSize)
	if _, err := io.ReadFull(rand.Reader, iv); err != nil {
		fmt.Println(err)
	}

	// Use the key and IV to create a CBC cipher
	block, err := aes.NewCipher(key)
	if err != nil {
		fmt.Println(err)
	}

	stream := cipher.NewCTR(block, iv)

	// Decrypt the encrypted data using the cipher
	decryptedData := make([]byte, len(encryptedData))
	stream.XORKeyStream(decryptedData, encryptedData)

	// Write the decrypted data to a new file
	decryptedFile, err := os.Create("decrypted_data.json")
	if err != nil {
		fmt.Println(err)
	}
	defer decryptedFile.Close()

	if _, err := decryptedFile.Write(decryptedData); err != nil {
		fmt.Println(err)
	}
}
