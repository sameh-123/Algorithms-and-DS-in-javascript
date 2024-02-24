# Merg-Sort

Merge Sort code written in javascript

it's an effecient way for sorting , it's time complexity is O(nlog(n))
--------------------------------------------------------------------------------
# Linked List
linked list data structure implemented in javascript
it supports the following methods :
1) append : to append a new element to the end 
2) prepend : to prepend a new element to the front of the linked list
3) size : which gives the number of elements in the linked list
4) front : which returns the first value in the linked list
5) back : which returns the last value in the linked list
6) at : which returns the value at a given index
7) pop : which removes the last element
8) popFront : which removes the first element
9) contains : which checks if the given value is represented in the linked list or not
10) find : which returns the index of the given value
11) toString : which returns a string represents the structure of the elements in the linked list
12) insertAt : which insertes the given value in the given index
13) removeAt : which removes the element at the given index

# Hash MAP
Hash Map data structure implemented in javascript

it's used to use strings as index to store data related to this string

it has the following methods:
1) set : which takes the key and the value that assigned to this key , it updates the value of this
key if it already has a value
2) get : which returns the value assigned to the given key or null if there isn't such key in the HashMap
3) has : which returns whether this key is in the HashMap or not
4) remove : which deletes the given key with its value from the HashMap
5) length : which returns the number of the keys used in the HashMap
6) clear : which deletes all the keys and values from the HashMap
7) keys : which returns all the keys represented in the HashMap
8) values : which returns all the values in the HashMap
9) entries : which returns all the keys with their values in the HashMap

I used the linked list data structure to keep my keys , so you have to include the Linked List file in this repo and export it

i assumed that the maximum size of the Hash Map to be 1000 entries , but it can be modified by updating the value of mod in
the hash function , but be careful of collisions ! 
