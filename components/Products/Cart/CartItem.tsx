import {
	Chip,
	Image,
	Table,
	TableBody,
	TableColumn,
	TableHeader,
	Tooltip,
	User,
} from "@nextui-org/react"
import React from "react"

// MOCK

const columns = [
	{ name: "NAME", uid: "name" },
	{ name: "ROLE", uid: "role" },
	{ name: "STATUS", uid: "status" },
	{ name: "ACTIONS", uid: "actions" },
]

const users = [
	{
		id: 1,
		name: "Tony Reichert",
		role: "CEO",
		team: "Management",
		status: "active",
		age: "29",
		avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
		email: "tony.reichert@example.com",
	},
	{
		id: 2,
		name: "Zoey Lang",
		role: "Technical Lead",
		team: "Development",
		status: "paused",
		age: "25",
		avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
		email: "zoey.lang@example.com",
	},
	{
		id: 3,
		name: "Jane Fisher",
		role: "Senior Developer",
		team: "Development",
		status: "active",
		age: "22",
		avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
		email: "jane.fisher@example.com",
	},
	{
		id: 4,
		name: "William Howard",
		role: "Community Manager",
		team: "Marketing",
		status: "vacation",
		age: "28",
		avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
		email: "william.howard@example.com",
	},
	{
		id: 5,
		name: "Kristen Copper",
		role: "Sales Manager",
		team: "Sales",
		status: "active",
		age: "24",
		avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
		email: "kristen.cooper@example.com",
	},
]

// FIN MOCK

export const CartItem = () => {
	const product = {
		id: 1,
		title: "My Strawberry",
		brand: "Zomo",
		category: "tabaco",
		description: "rico",
		thumbnail: "/productos/tabaco/zomo-mystrawberry.jpeg",
		price: 2300,
		isAvailable: true,
	}

	const renderCell = React.useCallback((user, columnKey) => {
		const cellValue = user[columnKey]
		const statusColorMap = {
			active: "success",
			paused: "danger",
			vacation: "warning",
		}

		switch (columnKey) {
			case "name":
				return (
					<User
						avatarProps={{ radius: "lg", src: user.avatar }}
						description={user.email}
						name={cellValue}>
						{user.email}
					</User>
				)
			case "role":
				return (
					<div className="flex flex-col">
						<p className="text-bold text-sm capitalize">{cellValue}</p>
						<p className="text-bold text-sm capitalize text-default-400">
							{user.team}
						</p>
					</div>
				)
			case "status":
				return (
					<Chip
						className="capitalize"
						color={statusColorMap[user.status]}
						size="sm"
						variant="flat">
						{cellValue}
					</Chip>
				)
			case "actions":
				return (
					<div className="relative flex items-center gap-2">
						<Tooltip content="Details">
							<span className="text-lg text-default-400 cursor-pointer active:opacity-50">
								👁️
							</span>
						</Tooltip>
						<Tooltip content="Edit user">
							<span className="text-lg text-default-400 cursor-pointer active:opacity-50">
								✍️
							</span>
						</Tooltip>
						<Tooltip color="danger" content="Delete user">
							<span className="text-lg text-danger cursor-pointer active:opacity-50">
								🚮
							</span>
						</Tooltip>
					</div>
				)
			default:
				return cellValue
		}
	}, [])

	return (
		// <div className="flex justify-between items-center gap-5 border border-black rounded-lg">
		// 	<div className="">
		// 		<Image src={product.thumbnail} alt="" width={200} height={200} />
		// 	</div>
		// 	<div className="flex-1 flex flex-col">
		// 		<h3 className="font-bold">{product.title}</h3>
		// 		<p className="text-gray-500 line-clamp-2">{product.description}</p>
		// 	</div>
		// 	<div className="px-4">
		// 		<p className="font-bold">
		// 			{product.price.toLocaleString("es-AR", {
		// 				style: "currency",
		// 				currency: "ARS",
		// 				maximumFractionDigits: 1,
		// 			})}
		// 		</p>
		// 	</div>
		// </div>
		<Table>
			<TableHeader columns={columns}>
				{(column) => (
					<TableColumn
						key={column.uid}
						align={column.uid === "actions" ? "center" : "start"}>
						{column.name}
					</TableColumn>
				)}
			</TableHeader>
			<TableBody></TableBody>
		</Table>
	)
}
