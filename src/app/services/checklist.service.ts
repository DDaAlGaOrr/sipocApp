import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChecklistService {
  selectedItems: { [itemId: string]: ChecklistAnswer } = {};

  setSelectedItem(
    itemId: string,
    answer: string,
    description: string = '',
    urlImage: string = ''
  ) {
    const existingItem = this.selectedItems[itemId];
    if (existingItem) {
      if (existingItem.answer !== answer) {
        existingItem.answer = answer;
        existingItem.description = description;
        existingItem.urlImage = urlImage;
      }
    } else {
      this.selectedItems[itemId] = {
        id: itemId,
        answer: answer,
        description: description,
        urlImage: urlImage,
      };
    }
    console.log(this.selectedItems);
  }

  getSelectedItem(itemId: string): ChecklistAnswer | undefined {
    return this.selectedItems[itemId];
  }

  getAllItems() {
    return this.selectedItems;
  }

  clearItems() {
    this.selectedItems = {};
  }

  getLength() {
    return Object.keys(this.selectedItems).length;
  }
}

interface ChecklistAnswer {
  id: string;
  answer: string;
  description: string;
  urlImage: string;
}