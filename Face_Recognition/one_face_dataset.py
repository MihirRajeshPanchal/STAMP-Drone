import json
import uuid
import os

def add_to_json(first_name, last_name, email, image):
   
    id = str(uuid.uuid4())

    # Create a dictionary for the new entry
    new_entry = {
        "id": id,
        "first_name": first_name,
        "last_name": last_name,
        "email": email,
        "image": image
    }

    # Check if the JSON file exists
    if os.path.isfile('STAMP/stamp/src/components/Security/details.json'):
        # If the file exists, load the existing data
        with open('STAMP/stamp/src/components/Security/details.json', 'r') as f:
            data = json.load(f)
        
        # Check if the name already exists in the JSON file
        for entry in data:
            if entry["first_name"] == first_name and entry["last_name"] == last_name:
                # If the name already exists, update the entry and exit the loop
                entry.update(new_entry)
                break
        else:
            # If the name does not exist, append the new entry to the data
            data.append(new_entry)
        
        # Write the updated data to the JSON file
        with open('STAMP/stamp/src/components/Security/details.json', 'w') as f:
            json.dump(data, f, indent=4)
    else:
        # If the file does not exist, create a new list with the new entry
        data = [new_entry]

        # Write the data to the JSON file
        with open('STAMP/stamp/src/components/Security/details.json', 'w') as f:
            json.dump(data, f, indent=4)


def face_train(first_name, last_name, email):
    import cv2
    import os

    cam = cv2.VideoCapture(0)
    cam.set(3, 640) # set video width
    cam.set(4, 480) # set video height

    face_detector = cv2.CascadeClassifier('Face_Recognition/haarcascade_frontalface_default.xml')

    font = cv2.FONT_HERSHEY_SIMPLEX

    # For each person, enter one numeric face id
    # face_id = input('\n enter user id end press <return> ==>  ')

    print("\n [INFO] Initializing face capture. Look the camera and wait ...")
    # Initialize individual sampling face count
    count = 1

    while(True):

        ret, img = cam.read()
        img = cv2.flip(img, 1) # flip video image vertically
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        faces = face_detector.detectMultiScale(gray, 1.3, 5)

        for (x,y,w,h) in faces:

            cv2.rectangle(img, (x,y), (x+w,y+h), (255,0,0), 2)     
            count += 1

            # Save the captured image into the datasets folder
            cv2.putText(img, str(count), (x+5,y-5), font, 1, (255,255,255), 2)
            cv2.imwrite("Face_Recognition/dataset/User." + first_name + last_name + '.' + str(count) + ".jpg", gray[y:y+h,x:x+w])
        cv2.imshow('image', img)

        k = cv2.waitKey(100) & 0xff # Press 'ESC' for exiting video
        if k == 27:
            break
        elif count >= 100: # Take 100 face sample and stop video
            break

    # Do a bit of cleanup
    print("\n [INFO] Exiting Program and cleanup stuff")
    cam.release()
    cv2.destroyAllWindows()


    # adding data to json
    add_to_json(first_name, last_name, email, f"User.{first_name}{last_name}.1.jpg")

# face_train("Mihir", "Panchal", "mihirpanchal5400@gmail.com")
# face_train("Sarid", "Qureshi", "saridqureshi299@gmail.com")
# face_train("Tanay", "Desai", "tanaydesai2004@gmail.com")