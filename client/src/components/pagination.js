import ReactPaginate from 'react-paginate';

const state = {
  list: [],
  perPage: 12,
  page: 0,
  pages: 0,
};

//https://flatlogic.com/blog/react-pagination-guide-and-best-react-pagination-libraries/

//   List serves as an array that will store our data that will come from the server.
// perPage is the number of rows that we will show in our table.
// Page is the start page from which our table will begin.
// Pages are how many pages are in the table initially.

const makeHttpRequest = async () => {
  let res = await axios.get('http://localhost:8080/list').catch(err => console.log(err));

  const { perPage } = this.state;
  const { list } = res.data;
  this.setState({
    list,
    pages: Math.floor(list.length / perPage)
  });
};

const handlePageClick = (event) => {
  let page = event.selected;
  this.setState({ page })
}

// const {page, perPage, pages, list} = this.state;
// let items = list.slice(page * perPage, (page + 1) * perPage);
const Paginate = ({ pages, handlePageClick }) => {
  return (
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      pageCount={pages}
      marginPagesDisplayed={1}
      pageRangeDisplayed={5}
      onPageChange={e => handlePageClick(e)}
      containerClassName={'pagination'}
      pageClassName={""}
      activeClassName={'active'}
    />
  )
}