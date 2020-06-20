// Variables
const characters = [
  'Hannah Abbott', 'Ludo Bagman', 'Bathilda Bagshot', 'Katie Bell', 'Cuthbert Binns', 'Sirius Black', 'Walburga Black', 'Amelia Bones', 'Susan Bones', 'Terry Boot', 'Lavender Brown', 'Millicent Bulstrode', 'Charity Burbage', 'Frank Bryce', 'Alecto Carrow', 'Amycus Carrow', 'Reginald Cattermole', 'Mary Cattermole', 'Cho Chang', 'Penelope Clearwater', 'Mrs.Cole', 'Michael Corner', 'Vincent Crabbe', 'Colin Creevey', 'Dennis Creevey', 'Dirk Cresswell', 'Barty Crouch Sr', 'Barty Crouch Jr', 'Roger Davies', 'John Dawlish', 'Fleur Delacour', 'Gabrielle Delacour', 'Dedalus Diggle', 'Amos Diggory', 'Cedric Diggory', 'Elphias Doge', 'Antonin Dolohov', 'Aberforth Dumbledore', 'Albus Dumbledore', 'Ariana Dumbledore', 'Kendra Dumbledore', 'Percival Dumbledore', 'Dudley Dursley', 'Marge Dursley', 'Petunia Dursley', 'Vernon Dursley', 'Marietta Edgecombe', 'Arabella Figg', 'Argus Filch', 'Justin Finch-Fletchley', 'Seamus Finnigan', 'Marcus Flint', 'Mundungus Fletcher', 'Filius Flitwick', 'Florean Fortescue', 'Cornelius Fudge', 'Marvolo Gaunt', 'Merope Gaunt', 'Morfin Gaunt', 'Anthony Goldstein', 'Mr. Goyle', 'Mrs. Goyle', 'Gregory Goyle', 'Hermione Granger', 'Gregorovitch', 'Fenrir Greyback', 'Gellert Grindelwald', 'Wilhelmina Grubbly-Plank', 'Rubeus Hagrid', 'Rolanda Hooch', 'Mafalda Hopkirk', 'Angelina Johnson', 'Lee Jordan', 'Igor Karkaroff', 'Viktor Krum', 'Silvanus Kettleburn', 'Bellatrix Lestrange', 'Rabastan Lestrange', 'Rodolphus Lestrange', 'Gilderoy Lockhart', 'Alice and Frank Longbottom', 'Augusta Longbottom', 'Neville Longbottom', 'Luna Lovegood', 'Xenophilius Lovegood', 'Remus Lupin', 'Teddy Lupin', 'Walden Macnair', 'Draco Malfoy', 'Lucius Malfoy', 'Narcissa Malfoy', 'Scorpius Malfoy', 'Madam Malkin', 'Griselda Marchbanks', 'Olympe Maxime', 'Ernie Macmillan', 'Minerva McGonagall', 'Cormac McLaggen', 'Graham Montague', 'Alastor (Mad - Eye) Moody', 'Theodore Nott', 'Bob Ogden', 'Garrick Ollivander', 'Pansy Parkinson', 'Padma Patil', 'Parvati Patil', 'Peter Pettigrew', 'Antioch Peverell', 'Cadmus Peverell', 'Ignotus Peverell', 'Irma Pince', 'Sturgis Podmore', 'Poppy Pomfrey', 'Harry Potter', 'James Potter', 'Lily Potter', 'Albus Severus Potter', 'James Sirius Potter', 'Lily Luna Potter', 'Quirinus Quirrell', 'Helena Ravenclaw', 'Mary Riddle', 'Thomas Riddle Sr. ', 'Thomas Riddle Jr. ', 'Thomas Marvolo Riddle', 'Demelza Robins', 'Augustus Rookwood', 'Thorfinn Rowle', 'Albert Runcorn', 'Newt Scamander', 'Rufus Scrimgeour', 'Kingsley Shacklebolt', 'Stan Shunpike', 'Aurora Sinistra', 'Rita Skeeter', 'Horace Slughorn', 'Salazar Slytherin', 'Zacharias Smith', 'Severus Snape', 'Alicia Spinnet', 'Pomona Sprout', 'Pius Thicknesse', 'Dean Thomas', 'Andromeda Tonks', 'Nymphadora Tonks', 'Ted Tonks', 'Sybill Trelawney', 'Wilkie Twycross', 'Dolores Umbridge', 'Emmeline Vance', 'Romilda Vane', 'Septima Vector', 'Lord Voldemort', 'Moaning Myrtle', 'Arthur Weasley', 'Bill Weasley', 'Charlie Weasley', 'Fred Weasley', 'George Weasley', 'Ginny Weasley', 'Hugo Weasley', 'Molly Weasley', 'Percy Weasley', 'Ron Weasley', 'Oliver Wood', 'Rose Weasley', 'Corban Yaxley', 'Blaise Zabini']

function randomCharacter () {
  return characters[Math.floor(Math.random() * characters.length)]
}

console.log(randomCharacter())
