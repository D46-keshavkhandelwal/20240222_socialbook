import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-post-container',
	standalone: true,
	imports: [],
	templateUrl: './post-container.component.html',
	styleUrl: './post-container.component.css'
})
export class PostContainerComponent {
	@Input() post =
		{
			profile_image_url: "https://i.postimg.cc/cHg22LhR/profile-pic.png",
			profile_name: "John Nicholson",
			timestamp: new Date(),
			caption: "Subscribe <span>@Vkive Tutorials</span> Youtube Channel to watch more videos on website development and UI desings. <a href='#'>#VkiveTutorials</a> <a href='#'>#YoutubeChannel</a>",
			image_url: "",
			comment_count: 120, like_count: 45, share_count: 9
		}
}
