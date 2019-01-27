## Measuring System Capacity


Form to measure the capacity constraints of the system:

```html
<form oninput='request_per_second.value = (parseFloat(number_of_requests.value) / parseFloat(request_unit_input.value) * parseFloat(request_unit_output.value)); total_size_per_request.value = (parseFloat(request_per_second.value) * parseFloat(size_per_request.value) * parseInt(size_unit_input.value) / parseInt(size_unit_output.value))'>
	<label for='number_of_requests'>Number of Requests: <input type='number' id='number_of_requests' step="1" min="0" value="1000"/></label>
	<label for='request_unit_input'> 
		<select id='request_unit_input'>
			<option value='1' selected='selected'> second </option>
			<option value='60'> minute </option>
			<option value='3600'> hour </option>
			<option value='86400'> day </option>
			<option value='2592000'> month </option>
			<option value='31536000'> year </option>
		</select>
	</label>
	<div>
		<label for='size_per_request'>Size per Request: <input type='number' id='size_per_request' step="1" min="0" value="1000"/></label>
		<label for='size_unit_input'>
			<select id='size_unit_input'>
				<option value='1' selected='selected'> Bytes </option>
				<option value='1024'> KB </option>
				<option value='1048576'> MB </option>
				<option value='1073741824'> GB </option>
				<option value='1099511627776'> TB </option>
			</select>
		</label>
	</div>
	<div>
		<h4>Requests per unit time</h4>
		<output name='request_per_second' for='number_of_requests request_unit'></output>
		<label for='request_unit_output'> 
			<select id='request_unit_output'>
				<option value='1' selected='selected'> second </option>
				<option value='60'> minute </option>
				<option value='3600'> hour </option>
				<option value='86400'> day </option>
				<option value='2592000'> month </option>
				<option value='31536000'> year </option>
			</select>
		</label>
	</div>
	<div>
		<h4>Total size per unit time</h4>
		<output name='total_size_per_request' for='size_per_request request_unit'></output>
		<label for='size_unit_output'>
			<select id='size_unit_output'>
				<option value='1' selected='selected'> Bytes </option>
				<option value='1024'> KB </option>
				<option value='1048576'> MB </option>
				<option value='1073741824'> GB </option>
				<option value='1099511627776'> TB </option>
			</select>
		</label>
	</div>
</form>
```
