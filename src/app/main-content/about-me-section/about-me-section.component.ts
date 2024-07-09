import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollTrigger) 

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent {

  @ViewChild('ripple') rippleBtn!: ElementRef;

  ngOnInit(): void {
    gsap.from('#work-together', {
      scrollTrigger: {
        trigger: '#work-together',
        // markers: true,
        start: 'top bottom',
        toggleActions: 'restart none none none'
      }, // start animation when ".box" enters the viewport
      x: -100,
      opacity: 0,
      duration: 1
    });



    //ripple btn versuch
    // const rippleBtn = document.getElementById("ripple");
    let ripples = document.createElement("span");
    let cleartimeout:any;

    //if want this effect when clicked then just add click insted of mouseover event
    this.rippleBtn.nativeElement.addEventListener("mouseover", function (e:any) {
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;
      ripples.style.left = x + "px";
      ripples.style.top = y + "px";
      e.target.appendChild(ripples);

      cleartimeout = setTimeout(() => {
        ripples.remove();
      }, 1000);
    });

    this.rippleBtn.nativeElement.addEventListener("mouseout", function () {
      ripples.remove();
    });



  }








}
