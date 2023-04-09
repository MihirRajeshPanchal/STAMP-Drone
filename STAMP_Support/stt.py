import speech_recognition as sr
from tts import tts

def stt():
    r = sr.Recognizer()
    while True:
        with sr.Microphone(device_index=2) as source:
            # audio_text=r.adjust_for_ambient_noise(source,5)
            # audio=r.listen(source=source,phrase_time_limit=5)
            audio = r.listen(source)
            # using google speech recognition
            try: 
                text = r.recognize_google(audio)
                print(text)
            except:
                tts('Couldnt Recognize your voice')
                return None
            return text
