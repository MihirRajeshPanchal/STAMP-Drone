package main

import (
    "crypto/aes"
    "crypto/cipher"
    "crypto/rand"
    "encoding/json"
    "fmt"
    "io/ioutil"
    "os"
)

func main() {
    // Read the JSON data from the file
    jsonFile, err := os.Open("details.json")
    if err != nil {
        fmt.Println(err)
    }
    defer jsonFile.Close()

    byteValue, _ := ioutil.ReadAll(jsonFile)

    // Convert the JSON data to a byte slice
    jsonData := []byte(byteValue)

    // Generate a key and an initialization vector (IV) for encryption
    key := make([]byte, 32)
    if _, err := rand.Read(key); err != nil {
        fmt.Println(err)
    }

    iv := make([]byte, aes.BlockSize)
    if _, err := rand.Read(iv); err != nil {
        fmt.Println(err)
    }

    // Use the key and IV to create a CBC cipher
    block, err := aes.NewCipher(key)
    if err != nil {
        fmt.Println(err)
    }

    stream := cipher.NewCTR(block, iv)

    // Encrypt the JSON data using the cipher
    encryptedData := make([]byte, len(jsonData))
    stream.XORKeyStream(encryptedData, jsonData)

    // Write the encrypted data to a new file
    encryptedFile, err := os.Create("encrypted_data.json")
    if err != nil {
        fmt.Println(err)
    }
    defer encryptedFile.Close()

    encoder := json.NewEncoder(encryptedFile)
    if err := encoder.Encode(encryptedData); err != nil {
        fmt.Println(err)
    }
}
