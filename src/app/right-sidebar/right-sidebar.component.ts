import { Component } from '@angular/core';

@Component({
	selector: 'app-right-sidebar',
	standalone: true,
	imports: [],
	templateUrl: './right-sidebar.component.html',
	styleUrl: './right-sidebar.component.css'
})
export class RightSidebarComponent {

	eventsList = [
		{ date: 18, month: "March", title: "Social Media", location: "Willson Tech Park" },
		{ date: 22, month: "June", title: "Mobile Marketing", location: "Willson Tech Park" }
	]

	sidebarAdUrl = "https://i.postimg.cc/CLXYx9BL/advertisement.png"

	friendList = [
		{ name: "Mamata banerjee", image_url: "https://theleaderspage.com/wp-content/uploads/2020/10/69036751_2655543887846269_4912322128440721408_o-980x980.jpg" },
		{ name: "rahul Gandi", image_url: "https://indianexpress.com/wp-content/uploads/2023/10/Rahul-gandhi-profile-800.jpg" },
		{ name: "yogi adityanath", image_url: "https://i.postimg.cc/FH5qqvkc/member-3.png" },
		{ name: "Amit shah", image_url: "data:image/jpeg;base64,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" }
	]
}