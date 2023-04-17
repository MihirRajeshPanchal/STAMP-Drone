def save_video(filename):
    import cv2
    import os
    import shutil
    # Path to the directory containing the JPEG images
    image_dir = "face_processing/"

    # Output video file name
    video_file = filename

    # Get a list of all the JPEG images in the directory
    image_files = [os.path.join(image_dir, f) for f in os.listdir(image_dir) if f.endswith(".jpg")]

    # Sort the image files in ascending order
    image_files.sort()

    # Read the first image to get the image size
    frame = cv2.imread(image_files[0])
    height, width, channels = frame.shape

    # Define the codec and create a VideoWriter object
    fourcc = cv2.VideoWriter.fourcc('m','p','4','2') # MPEG-4 codec
    out = cv2.VideoWriter(video_file, fourcc, 30.0, (width, height))

    # Loop through all the image files and add them to the video
    for image_file in image_files:
        frame = cv2.imread(image_file)
        out.write(frame)

    # Release the VideoWriter and close all windows
    out.release()
    cv2.destroyAllWindows()
    shutil.rmtree("face_processing")