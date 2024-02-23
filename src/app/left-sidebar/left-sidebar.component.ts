import { Component } from '@angular/core';

@Component({
	selector: 'app-left-sidebar',
	standalone: true,
	imports: [],
	templateUrl: './left-sidebar.component.html',
	styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {
	impLinks = [
		{ title: "Notification", url: "https://i.postimg.cc/RCj4MjnC/news.png" },
		{ title: "Favorites", url: "https://i.postimg.cc/MpBwMtV0/friends.png" },
		{ title: "Account Privacy", url: "https://i.postimg.cc/44FRWj1b/group.png" },
		{ title: "Close Friend", url: "https://i.postimg.cc/0jh39RtT/marketplace.png" },
		{ title: "Reels", url: "https://i.postimg.cc/VsXHCTVk/watch.png" }
	]

	userShortcuts = [
		{ title: "Hyderabad Foods", url: "https://www.pavaniskitchen.com/wp-content/uploads/2021/04/egg-biryani-recipe-1024x1024.jpg" },
		{ title: "HTML Engineering course", url: "https://3.bp.blogspot.com/-RaQkWMDZh2M/VxNsYbqan6I/AAAAAAAACSQ/vNUFQVEmiaAgQTgnx3WUY7U7Tq5G9gvKgCLcB/s1600/html-editor-.png" },
		{ title: "Full Strack Development", url: "https://i.postimg.cc/0yk3xfZ2/shortcut-3.png" },
		{ title: "Website Experts", url: "https://i.postimg.cc/Z5wQqdDP/shortcut-4.png" }
	]
}
