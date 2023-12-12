export type AppNavLinksProps = {
	name: string
	link: string
	isDropdown?: boolean
	dropdown?: Array<{
		name: string
		link: string
	}>
}
