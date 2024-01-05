import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export default function Page() {
	return (
		<>
			<Navbar />
			<div className="bg-primary-light p-3">
				<p>Provider</p>
			</div>

			<div className="container mx-auto px-5 my-10">
				<div className="flex items-center gap-3 text-primary">
					<p>Add Provider</p>
					<p className="text-black">|</p>
					<p>Find a Provider</p>
					<p className="text-black">|</p>
					<p>Sync</p>
				</div>

				<Table>
					<TableHeader className="bg-gray-200">
						<TableRow>
							<TableHead className="w-[100px]">Shortname</TableHead>
							<TableHead>Business Name</TableHead>
							<TableHead>Mapping Status</TableHead>
							<TableHead className="text-right">Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{[...Array(10)].map((_, i) => (
							<TableRow className={i % 2 == 0 ? "bg-gray-100" : ""} key={i}>
								<TableCell className="font-medium">hotel_xyz</TableCell>
								<TableCell>Hotel XYZ</TableCell>
								<TableCell>Active</TableCell>
								<TableCell className="text-right">Manage</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</>
	);
}
