import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-word',
  templateUrl: './random-word.component.html',
  styleUrls: ['./random-word.component.css']
})
export class RandomWordComponent implements OnInit {

  constructor() { }
  randomWord = "blank"
  ngOnInit(): void {
    var words = ['Rock', 'Paper', 'Scissors'];
    console.log("Guessing random word")
    this.randomWord = words[Math.floor(Math.random() * words.length)];
    console.log("Word: "+this.randomWord)
  }

}
