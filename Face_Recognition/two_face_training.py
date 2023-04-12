def add_to_json(image_label_set):
    import json

    # Define the original set of tuples

    # Read the JSON object from a file
    with open("Face_Recognition/details.json", "r") as f:
        users_list = json.load(f)

    # Loop through the list of users to find those whose names are in the original set
    for user in users_list:
        for image_id, name in image_label_set:
            if name == user["first_name"] + user["last_name"]:
                # If the user is found, add an "image_id" field with the corresponding value from the original set
                user["image_id"] = image_id

    # Write the updated JSON object back to the file
    with open("Face_Recognition/details.json", "w") as f:
        json.dump(users_list, f)
        
def rearrange_json():
    import json

    # load the JSON file
    with open('Face_Recognition/details.json') as f:
        data = json.load(f)

    # sort the data by image_id
    data_sorted = sorted(data, key=lambda x: x['image_id'])

    # save the sorted data to a new file
    with open('Face_Recognition/details.json', 'w') as f:
        json.dump(data_sorted, f, indent=4)  
              
def yml_train():
    import cv2
    import numpy as np
    from PIL import Image
    import os

    # Path for face image database
    path = 'Face_Recognition/dataset'

    image_label_set=set()
    
    recognizer = cv2.face.LBPHFaceRecognizer_create()
    detector = cv2.CascadeClassifier("Face_Recognition/haarcascade_frontalface_default.xml")
    labels = []
    # function to get the images and label data
    def getImagesAndLabels(path):

        imagePaths = [os.path.join(path,f) for f in os.listdir(path)]     
        faceSamples=[]
        labels_dict = {}
        label = 0

        for imagePath in imagePaths:

            PIL_img = Image.open(imagePath).convert('L') # convert it to grayscale
            img_numpy = np.array(PIL_img,'uint8')

            name = os.path.split(imagePath)[-1].split(".")[1]
            if name not in labels_dict:
                labels_dict[name] = label
                label += 1
            label_id = labels_dict[name]
            faces = detector.detectMultiScale(img_numpy)

            for (x,y,w,h) in faces:
                faceSamples.append(img_numpy[y:y+h,x:x+w])
                labels.append(label_id)
            image_label_set.add((label_id,name)) 
        return faceSamples, labels

    print ("\n [INFO] Training faces. It will take a few seconds. Wait ...")
    faces, labels = getImagesAndLabels(path)
    recognizer.train(faces, np.array(labels))

    # Save the model into trainer/trainer.yml
    recognizer.write('Face_Recognition/trainer/trainer.yml') # recognizer.save() worked on Mac, but not on Pi

    add_to_json(image_label_set)
    rearrange_json()
    # Print the number of faces trained and end program
        # adding data to json
    print("\n [INFO] {0} faces trained. Exiting Program".format(len(np.unique(labels))))