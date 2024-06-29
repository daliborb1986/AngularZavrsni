import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-social-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-sidebar.component.html',
  styleUrl: './social-sidebar.component.css',
})
export class SocialSidebarComponent implements OnInit {
  socialIcons: any[] = [
    {
      name: 'facebook',
      path: '/assets/facebook.png',
    },
    {
      name: 'twitter',
      path: '/assets/twitter.png',
    },
    {
      name: 'pinterest',
      path: '/assets/pinterest.png',
    },
    {
      name: 'youtube',
      path: '/assets/youtube.png',
    },
    {
      name: 'instagram',
      path: '/assets/instagram.png',
    },
  ];
  ngOnInit(): void {}
}
