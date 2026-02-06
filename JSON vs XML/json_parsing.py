# this is example of json syntax and parsing demo
import json

# convert json into python object(deserialization or parsing)
#multiline strings using single quotes in python 

str_person='''{
    "name": "Yolisa",
    "address": "jadibuti",
    "marks": 90.98  
}'''

# notice "marks":90,98 here no comma 

obj_person=json.loads(str_person)  #json parsing 
#process of converting json string into python object is called deserialization or parsing
print(type(str_person)) #<class 'str' , this is json string
print(type(obj_person)) #<class 'dict' , this is python dictionary
print(obj_person['name']) # {'name': 'Yolisa'}
print(obj_person['address']) #jadibuti
print(obj_person['marks']) #90.98

obj_person['name']='Aayush' #updating name from Yolisa to Aayush
print(obj_person) # {'name': 'Aayush', 'address': 'balkumari', 'marks': 90.98}

obj_person['email']='yoyo@gmail.com'
print(obj_person) # modified json, appended new field email

#converting python object into json(serialization))

dog_data = {
    "brees-id":5,
    "breed": "German Shepherd",
    "weight": 15
}

json_dog_data= json.dumps(dog_data) # this is not json parsing, this is serialization

print(type(dog_data)) # <class 'dict'>, python object
print(type(json_dog_data)) # <class 'str'>, json string







