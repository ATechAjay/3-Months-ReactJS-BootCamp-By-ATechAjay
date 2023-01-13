import "./Filter.css";

function Filter(props) {
  function filterHandler(event) {
    props.onFilterYear(event.target.value);
  }

  return (
    <div className="filter">
      <label>Filter by year</label>
      <select value={props.filteredYearValue} onChange={filterHandler}>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
}

export default Filter;
