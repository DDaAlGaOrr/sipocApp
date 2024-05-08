import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  selectedItems: { [rel_id: string]: ProjectAnswers } = {};

  setGeneralChecklist(
    rel_id: string,
    rel_type: string,
    id_checklist: string,
    checklist_answers: any
  ) {
    // const existingItem = this.selectedItems[rel_id];

    this.selectedItems[rel_id] = {
      rel_id: rel_id,
      checklist_answers: checklist_answers,
      rel_type: rel_type,
      id_checklist: id_checklist,
    };

    console.log(this.selectedItems);
  }
  getSelectedItem(rel_id: string): ProjectAnswers | undefined {
    return this.selectedItems[rel_id];
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
interface ProjectAnswers {
  rel_id: string;
  rel_type: string;
  id_checklist: string;
  checklist_answers: any;
}
interface ChecklistAnswer {
  id: string;
  answer: string;
  description: string;
  urlImage: string;
}
