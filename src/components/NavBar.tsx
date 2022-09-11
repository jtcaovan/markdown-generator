import SaveIcon from "../assets/icon-save.svg";

export default function NavBar() {
	return (
		<div className="flex justify-between items-center bg-black-200 text-white">
			<div className="bg-black-100">Dropdown Menu</div>
			<div className="font-body tracking-[2px] border-r pr-2">MARKDOWN</div>
			<div>Welcome Component</div>
			<button className="p-4 flex gap-2 bg-orange-200 font-light text-sm hover:bg-orange-100">
				<img src={SaveIcon} alt="save icon" />
				<span>Save Changes</span>
			</button>
		</div>
	);
}
