import { Component } from '@angular/core';

@Component({
	selector: 'app-story-gallery',
	standalone: true,
	imports: [],
	templateUrl: './story-gallery.component.html',
	styleUrl: './story-gallery.component.css'
})
export class StoryGalleryComponent {
	profile_img_url = "https://i.postimg.cc/TPh453Zz/upload.png"

	stories = [
		{id: 2, story_image_url: "", profile_image_url: "https://i.postimg.cc/XNPtfdVs/member-1.png", user_name: "Modi"},
		{id: 3, story_image_url: "", profile_image_url: "https://i.postimg.cc/4NhqByys/member-2.png", user_name: "memes"},
		{id: 4, story_image_url: "", profile_image_url: "https://i.postimg.cc/FH5qqvkc/member-3.png", user_name: "theincomet"},
		{id: 5, story_image_url: "", profile_image_url: "https://i.postimg.cc/Sx65bPcP/member-4.png", user_name: "rvcjinsta"},
	]
}
