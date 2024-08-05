export function formatCurrency(val: number) {
	return val.toLocaleString(navigator.language, {
		style: "currency",
		currency: "usd",
	});
}
