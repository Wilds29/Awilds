#1 Update Values in Dictionaries and Lists

from curses import keyname
from optparse import Values


x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

x[1][0]= 15
print(x[1])

students[1]['last_name'] = "bryant"
print(students[0])

sports_directory['soccer'][0]= 'Andres'
print(sports_directory)

z[0]['y']= 30
print(z)




#2. Iterate Through a List of Dictionaries
#3 Get Values From a List of Dictionaries

students = [
         {'first_name' : 'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]
def iterateDictionary(students):
    for key in students:
        print(f"first_name - {key} , last_name - {key}")
iterateDictionary(students)

def iteratedictionary2(key_name, some_list):
    for i in some_list:
        for key in i.keys():
            if (key == key_name):
                print(i[key])
iteratedictionary2('first_name', students)
iteratedictionary2('last_name', students)


#4 Iterate Through a Dictionary with List Values

dojo = {
   '7 locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   '8 instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

for key, values in dojo.items():
    print(key)
    if(isinstance(values, list)):
        for value in values:
            print(value)
    else:
        print(value)