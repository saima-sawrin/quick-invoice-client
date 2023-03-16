import React from 'react';

const FAQ = () => {
    return (
        <div>

<section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl  text-primary text-center">Frequently Asked Questions</h2>
		
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Can I pull multiple expenses to an invoice?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Yes, you can.

When you create an invoice, Zoho Invoice will prompt all the unbilled expenses associated to the contact (as shown in the image below). You can choose to add the expenses to the invoice right there. You can select and add only the expenses you want to associate with that invoice, the remainder of the expenses will remain and will be similarly prompted the next time you select that particular contact to invoice.</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What's the benefit by using Invoice Software?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Using an invoice app and software to generate invoices helps freelancers and small businesses keep track of their revenue and receive payments in a timely manner. Using a dashboard with invoices, estimates and receipts, entrepreneurs won’t have to track down individual documents — it’s all available on one easy platform.</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What's the best way to accept invoice Payment?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Invoice Maker is directly integrated with all the top payment processing services like Stripe, Paypal, Venmo and more. Your clients can use their preferred method of payment, which helps you get paid faster.</p>
			</details>
		</div>
	</div>
</section>
        </div>
    );
};

export default FAQ;