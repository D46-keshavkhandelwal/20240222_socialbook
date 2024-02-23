import { Component } from '@angular/core';
import { StoryGalleryComponent } from '../story-gallery/story-gallery.component';
import { WritePostContainerComponent } from '../write-post-container/write-post-container.component';
import { PostContainerComponent } from '../post-container/post-container.component';

@Component({
	selector: 'app-main-content',
	standalone: true,
	imports: [
		StoryGalleryComponent,
		WritePostContainerComponent,
		PostContainerComponent
	],
	templateUrl: './main-content.component.html',
	styleUrl: './main-content.component.css'
})

export class MainContentComponent {
	posts = [
		{
			profile_image_url: "https://i.postimg.cc/cHg22LhR/profile-pic.png",
			profile_name: "John Nicholson",
			timestamp: new Date(),
			caption: "Subscribe <span>@Vkive Tutorials</span> Youtube Channel to watch more videos on website development and UI desings. <a href='#'>#VkiveTutorials</a> <a href='#'>#YoutubeChannel</a>",
			image_url: "https://i.postimg.cc/9fjhGTY6/feed-image-1.png",
			comment_count: 120, like_count: 45, share_count: 9
		},
		{
			profile_image_url: "https://i.postimg.cc/cHg22LhR/profile-pic.png",
			profile_name: "John Nicholso",
			timestamp: new Date(),
			caption: 'Like and share this video with friends, tag <span> @Vkive Tutorials </span>facebook page on your post. Ask your dobuts in the comments. <a href = "#"> #VkiveTutorials </a> <a href="#">#YoutubeChannel</a>',
			image_url: "https://i.postimg.cc/Xvc0xJ2p/feed-image-2.png",
			comment_count: 812, like_count: 1928, share_count: 2
		},
		{
			profile_image_url: "https://i.postimg.cc/cHg22LhR/profile-pic.png",
			profile_name: "John Nicholson",
			timestamp: new Date(),
			caption: 'Like and share this video with friends, tag <span> @Vkive Tutorials </span>facebook page on your post. Ask your dobuts in the comments. <a href = "#"> #VkiveTutorials </a> <a href="#">#YoutubeChannel</a>',
			image_url: "https://i.postimg.cc/tJ7QXz9x/feed-image-3.png",
			comment_count: 9, like_count: 9, share_count: 9
		},
		{
			profile_image_url: "https://i.postimg.cc/cHg22LhR/profile-pic.png",
			profile_name: "John Nicholson",
			timestamp: new Date(),
			caption: 'Like and share this video with friends, tag <span> @Vkive Tutorials </span>facebook page on your post. Ask your dobuts in the comments. <a href = "#"> #VkiveTutorials </a> <a href="#">#YoutubeChannel</a>',
			image_url: "https://i.postimg.cc/hjDRYBwM/feed-image-4.png",
			comment_count: 9, like_count: 9, share_count: 9
		},
		{
			profile_image_url: "https://i.postimg.cc/cHg22LhR/profile-pic.png",
			profile_name: "John Nicholson",
			timestamp: new Date(),
			caption: 'Like and share this video with friends, tag <span> @Vkive Tutorials </span>facebook page on your post. Ask your dobuts in the comments. <a href = "#"> #VkiveTutorials </a> <a href="#">#YoutubeChannel</a>',
			image_url: "https://i.postimg.cc/ZRwztQzm/feed-image-5.png",
			comment_count: 9, like_count: 9, share_count: 9
		}
	]
}