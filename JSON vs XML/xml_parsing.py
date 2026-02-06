import xml.etree.ElementTree as ET

str_person = """<?xml version="1.0" encoding="UTF-8"?>
<person>
    <name>Yolisa</name>
    <address>jadibuti</address>
    <marks>90.98</marks>
</person>
"""
obj_person = ET.fromstring(str_person)

print(type(str_person))
print(type(obj_person))

print(obj_person.find('name').text)
print(obj_person.find('address').text)
print(obj_person.find('marks').text)

obj_person.find('name').text = 'Aayush'
print(obj_person.find('name').text)

ET.SubElement(obj_person, 'email').text = "yoyo@gmail.com"

print(ET.tostring(obj_person, encoding='unicode'))
