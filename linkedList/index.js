class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}
	add(value) {
		if (this.length === 0) {
			this.head = new Node(value);
		} else {
			let cur = this.head;
			while (cur.next) {
				cur = cur.next;
			}
			cur.next = new Node(value);
		}
		this.length++;
	}
}
