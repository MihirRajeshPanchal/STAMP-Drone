def yml_train():
    import cv2
    import numpy as np
    from PIL import Image
    import os

    # Path for face image database
    path = 'Face_Recognition/dataset'

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

        return faceSamples, labels

    print ("\n [INFO] Training faces. It will take a few seconds. Wait ...")
    faces, labels = getImagesAndLabels(path)
    recognizer.train(faces, np.array(labels))

    # Save the model into trainer/trainer.yml
    recognizer.write('Face_Recognition/trainer/trainer.yml') # recognizer.save() worked on Mac, but not on Pi

    # Print the number of faces trained and end program
    print("\n [INFO] {0} faces trained. Exiting Program".format(len(np.unique(labels))))

# yml_train()