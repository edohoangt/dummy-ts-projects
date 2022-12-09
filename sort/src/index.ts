import { Sorter } from "./Sorter";
import { NumberCollections } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// const numberCollections = new NumberCollections([10, 3, -5, 100]);
// numberCollections.sort();

// const charsCollection = new CharactersCollection("Xaayb");
// charsCollection.sort();

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(1);
linkedList.add(-4);
linkedList.add(3);
linkedList.sort();

// console.log(numberCollections.data);
// console.log(charsCollection.data);
linkedList.print();
