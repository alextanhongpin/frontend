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


## Autofill

```html
Reference <a href='https://developers.google.com/web/updates/2015/06/checkout-faster-with-autofill'>here</a>.
<h1>
	Credit Card
</h1>
<label for="frmNameCC">Name on card</label>
<input name="ccname" id="frmNameCC" required placeholder="Full Name" autocomplete="cc-name">

<label for="frmCCNum">Card Number</label>
<input name="cardnumber" id="frmCCNum" required autocomplete="cc-number">

<label for="frmCCCVC">CVC</label>
<input name="cvc" id="frmCCCVC" required autocomplete="cc-csc">

<label for="frmCCExp">Expiry</label>
<input name="cc-exp" id="frmCCExp" required placeholder="MM-YYYY" autocomplete="cc-exp">
<h1>
	Name
</h1>
<label for="frmNameA">Name</label>
<input name="name" id="frmNameA" placeholder="Full name" required autocomplete="name">

<label for="frmEmailA">Email</label>
<input type="email" name="email" id="frmEmailA" placeholder="name@example.com" required autocomplete="email">

<label for="frmEmailC">Confirm Email</label>
<input type="email" name="emailC" id="frmEmailC" placeholder="name@example.com" required autocomplete="email">
<h1>
	Address
</h1>
<label for="frmAddressS">Address</label>
<input name="ship-address" required id="frmAddressS" placeholder="123 Any Street" autocomplete="shipping street-address">

<label for="frmCityS">City</label>
<input name="ship-city" required id="frmCityS" placeholder="New York" autocomplete="shipping locality">

<label for="frmStateS">State</label>
<input name="ship-state" required id="frmStateS" placeholder="NY" autocomplete="shipping region">

<label for="frmZipS">Zip</label>
<input name="ship-zip" required id="frmZipS" placeholder="10011" autocomplete="shipping postal-code">

<label for="frmCountryS">Country</label>
<input name="ship-country" required id="frmCountryS" placeholder="USA" autocomplete="shipping country">
<h1>
	Phone
</h1>
<label for="frmPhoneNumA">Phone</label>
<input type="tel" name="phone" id="frmPhoneNumA" placeholder="+1-650-450-1212" required autocomplete="tel">
```
