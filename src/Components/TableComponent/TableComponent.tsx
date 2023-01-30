import style from "./TableComponent.module.scss";
import { Box } from "@mui/material";
import { FieldArray, Form, Formik } from "formik";
import Chip from "../Chip/Chip";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRef, useState } from "react";

const tempData = {
	row: [
		{
			fieldName: "",
			dataType: "",
			isNull: false,
			isUnique: true,
			attributes: [],
		},
	],
	links: [{ sourceId: "My Id ", targetId: "", fieldName: "", relation: "" }],
};

const options = {
	dataTypes: [
		{ value: "1", name: "string" },
		{ value: "2", name: "number" },
	],
	constraints: [
		{ value: "1", name: "string" },
		{ value: "2", name: "number" },
		{ value: "3", name: "a" },
		{ value: "4", name: "b" },
		{ value: "5", name: "c" },
		{ value: "6", name: "d" },
		{ value: "7", name: "e" },
		{ value: "8", name: "f" },
	],
};
const TableComponent = () => {
	const functionRef = useRef<any>({});

	const valueName = (() => {
		const object: any = {};
		options.constraints.forEach(({ value, name }: any) => (object[value] = name));
		return object;
	})();
	console.log(valueName);
	const filteredOptions = (array: any) => {
		const set = new Set(array);
		return options.constraints.filter((data) => !set.has(data.value));
	};
	return (
		<div className={style["table-container"]}>
			<button
				type="button"
				onClick={() =>
					functionRef.current.push({
						fieldName: "",
						dataType: "",
						isNull: false,
						isUnique: true,
						attributes: [],
					})
				}>
				Add New
			</button>
			<Formik initialValues={tempData} onSubmit={(e) => console.log(e)}>
				{(formData:any) => (
					<Form
						className={style["table"]}
						onKeyDown={(keyEvent:any) => {
							if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
								keyEvent.preventDefault();
							}
						}}>
						<FieldArray name="links">
							{({ insert, remove, push }) =>
								formData.values.links.map((field: any, index: number) => <div>{field.sourceId}</div>)
							}
						</FieldArray>

						<div className={style["table-row"] + " " + style["table-header"]}>
							<div className={style["row-data"]}>Field Name</div>
							<div className={style["row-data"]}>Data Type</div>
							<div className={style["row-checkbox"]}>Is Null</div>
							<div className={style["row-checkbox"]}>Unique</div>
							<div className={style["row-attributes"]}>Constraints</div>
							<div className={style["row-delete"]}>Delete</div>
						</div>
						<FieldArray name="row">
							{({ insert, remove, push }) => (
								<>
									{formData.values.row.map((field: any, index: number) => {
										functionRef.current = {
											push: push,
										};
										return (
											<div className={style["table-row"]}>
												<div className={style["row-data"]}>
													<input
														name={`row.${index}.fieldName`}
														className={style.input}
														type="string"
														pattern={"/(?=*[^0-9]).(?=*[a-zA-Z]).{1,}/gi"}
														onChange={formData.handleChange}
														placeholder="UsersList"
													/>
												</div>

												<div className={style["row-data"]}>
													<select
														className={style.select}
														onChange={formData.handleChange}
														value={field.dataType}
														name={`row.${index}.dataType`}>
														<option>Select a data type</option>
														{options.dataTypes.map((dataType) => (
															<option value={dataType.value}>{dataType.name}</option>
														))}
													</select>
												</div>
												<div className={style["row-checkbox"]}>
													<input
														type="checkbox"
														checked={field.isNull}
														name=""
														onChange={() =>
															formData.handleChange({
																currentTarget: {
																	name: `row.${index}.isNull`,
																	value: !field.isNull,
																},
															})
														}
													/>
												</div>
												<div className={style["row-checkbox"]}>
													<input
														type="checkbox"
														name=""
														defaultChecked={field.isUnique}
														onChange={() =>
															formData.handleChange({
																currentTarget: {
																	name: `row.${index}.isUnique`,
																	value: !field.isUnique,
																},
															})
														}
													/>
												</div>
												<div className={style["row-attributes"]}>
													<div className={style.dropdown}>
														<select
															className={style.select}
															onChange={(e) =>
																formData.handleChange({
																	currentTarget: {
																		name: `row.${index}.attributes`,
																		value: [...field.attributes, e.target.value],
																	},
																})
															}
															value={""}
															name={`row.${index}.attributes`}>
															<option value="">Select a constraints</option>
															{filteredOptions(field.attributes).map((dataType) => (
																<option value={dataType.value}>{dataType.name}</option>
															))}
														</select>
													</div>
													<div className={style["attribute-holder"]}>
														{field.attributes.map((attr: any) => (
															<Chip
																label={valueName[attr]}
																deleteFn={() =>
																	formData.handleChange({
																		currentTarget: {
																			name: `row.${index}.attributes`,
																			value: field.attributes.filter(
																				(value: any) => value != attr
																			),
																		},
																	})
																}
															/>
														))}
													</div>
												</div>
												<div className={style["row-delete"]}>
													<DeleteIcon onClick={() => remove(index)} />
												</div>
											</div>
										);
									})}
								</>
							)}
						</FieldArray>
						<button>Test</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default TableComponent;
