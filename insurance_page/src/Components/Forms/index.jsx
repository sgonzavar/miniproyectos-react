const FormsInsurance = () => {
  return (
    <form>
      <section>
        <label htmlFor="marca">marca</label>
        <select name="marca" id="marca">
          <option value="">-- Seleccione --</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </select>
      </section>
      <section>
        <label htmlFor="año">año</label>
        <select name="año" id="año">
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </select>
      </section>
      <section>
        <label htmlFor="plan">plan</label>
<input type="radio" name="plan" id="" />
      </section>

    </form>
  );
};

export default FormsInsurance;
