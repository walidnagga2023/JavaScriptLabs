LABS

Scenario 1 :
You have started to organize the paintings you keep at home, and have decided to make an inventory of some of the most important ones. Declare an array of objects that will correspond to the following images: Mona Lisa (Leonardo da Vinci, 1503), The Last Supper (Leonardo da Vinci, 1495), Starry Night (Vincent van Gogh, 1889), The Scream (Edvard Munch, 1893), Guernica (Pablo Picasso, 1937), The Kiss (Gustav Klimt, 1907), Girl With a Pearl Earring (Johannes Vermeer, 1665), The Birth of Venus (Sandro Botticelli, 1485), Las Meninas (Diego Velázquez, 1656), The Creation of Adam (Michelangelo, 1512).
Display all the images in the list in the console (full information: title, artist and date of creation).

Scenario 2 :
Write two functions, Image and getImage, that will return a new image object based on three given arguments: title, artist, and date.
The Image function is the constructor, and getImage is the factory. Using the images data array from the previous task, create a new array, images1, using the Image constructor (don't copy the objects, but just create new ones based on the properties read).
Similarly, from images1 create a new array, images2, using getImage.
Display the contents of images2.
Scenario 3 :
Create an images object that will be used to store the images. The object should have a list property, which will be an array of image objects and methods:
•	contains - which takes as its argument the title of the image and returns true if the image is already placed in the list (otherwise it returns false)
•	add – which takes three arguments (title, artist, and date) and creates a new object based on them and adds it to the list (if it has not already been added)
•	show - which displays all images on the list;
•	clear – which removes all objects from the list.
While creating an object, use the Image constructor prepared in the earlier task.
Test the script by calling the sequence:
images.add('Mona Lisa', 'Leonardo da Vinci', 1503); 
images.add('The Last Supper', 'Leonardo da Vinci', 1495); 
images.add('The Starry Night', 'Vincent van Gogh', 1889); 
images.add('Mona Lisa', 'Leonardo da Vinci', 1503); 
images.show(); 
// -> Mona Lisa (Leonardo da Vinci, 1503) 
// -> Last Supper (Leonardo da Vinci, 1495) 
// -> The Starry Night (Vincent van Gogh, 1889) 
images.clear(); 
images.show(); 

Scenario 4 :
Complement the images object from the previous task with two new methods (without rewriting the whole object):
•	edit - which takes three arguments (title, artist, and date) and if it finds an image with the given title in the list, it changes its artist and date properties;
•	delete - which takes the title argument and if it finds a picture with this title in the list, it deletes it (to delete a list element, use the splice method)
Additionally, add a show method to the Image constructor, which will display information about this one image. Do not rewrite the constructor. Use prototypes for this purpose. Then modify the show method of the images object so that it uses the newly created single image show method to display the information.
Test the script by calling the sequence:
images.add('Mona Lisa', 'Leonardo da Vinci', 1503); 
images.add('The Last Supper', 'Leonardo da Vinci', 1495); 
images.add('The Starry Night', 'Vincent van Gogh', 1889); 
images.edit('Mona Lisa', 'Leonardo da Vinci', 1504); 
images.delete('The Last Supper'); 
images.show(); 
// -> Mona Lisa (Leonardo da Vinci, 1504) 
// -> The Starry Night (Vincent van Gogh, 1889) 

Scenario  :
Write a function, deepComp, that will compare two objects given as arguments (deep comparison). Compare only properties (ignore methods), and consider the possibility of nesting (any number of levels).
Properties can also be objects and arrays. We are interested in the properties available during the usual enumeration.
For testing, use the following piece of code:
let a={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}}; 
let b={x:[1,2,3,4,5], y:0, z: {m:'test', n:false}}; 
let c={x:[1,2,3,4,5,6], y:0, z: {m:'test', n:false}}; 
let d={x:[1,2,3,4], y:0, z: {m:'test', n:false}}; 
let e={x:[1,2,3,4,5], y:0, z: {m:'test', n:true}}; 
let f={x:[1,2,3,4,5], y:-1, z: {m:'test', n:false}}; 
console.log(deepComp(a,b)); // -> true 
console.log(deepComp(a,c)); // -> false 
console.log(deepComp(a,d)); // -> false 
console.log(deepComp(a,e)); // -> false 
console.log(deepComp(a,f)); // -> false 



