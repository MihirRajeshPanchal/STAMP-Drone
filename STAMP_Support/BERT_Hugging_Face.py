from transformers import pipeline

# Load pre-trained BERT model for question answering
qa_pipeline = pipeline("question-answering")

# Define input string
input_str = "What is drone?"

# Answer question using BERT model
result = qa_pipeline(input_str, context="Drones, also known as unmanned aerial vehicles (UAVs), are aircraft that are operated without a human pilot on board. They come in a variety of sizes and shapes, ranging from small quadcopters that can fit in the palm of your hand to large fixed-wing aircraft that can fly at high altitudes for extended periods of time. Drones are equipped with a range of sensors and cameras that allow them to capture aerial imagery and collect data on various environmental conditions. They are used in a wide range of applications, including but not limited to military surveillance, agricultural mapping, search and rescue operations, wildlife conservation, and filmmaking. With the increasing availability of commercial drones, regulations surrounding their use have become a pressing issue. Governments around the world have implemented various rules and restrictions to ensure the safe and responsible operation of drones.")
answer = result["answer"]

# Print answer
print(answer)
