import axios from 'axios'

function getProList () {
  return axios.post('http://localhost:9999/product/list')
    .then(function (response) {
      return response
    })
}

function getProDetail (prodId) {
  return axios.post('http://localhost:9999/product/detail', {
    prodId: prodId
  })
}

export default { getProList, getProDetail }
