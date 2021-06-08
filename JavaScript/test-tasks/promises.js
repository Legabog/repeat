function getAuth() {} // return Promise (critical) with token

function getUser(token) {} // [return Promise with userId]
function getOrder(token, userId) {} // [return Promise]
function getPromo(token) {} // [return Promise]

const promise = new Promise((resolve, reject) => {
    resolve(5)
})

function getData() {
  return new Promise((resolve, reject) = > {
    getAuth()
  }
        //     getAuth()
        //         .then(t => {
        //             resolve({
        //             t, 
        //             getUser(t)
        //                 .then(userId => userId)
        //                 .catch(e => console.log(e)), 
        //             getUser(t)
        //                 .then(userId => getOrder(t, userId).then(order => order).catch(e => console.log(e)))
        //                 .catch(e => console.log(e)),
        //             getPromo(t)
        //                 .then(promo => promo)
        //                 .catch(e => console.log(e))
        // })
        //         })   
        //         .catch(e => console.log(e)) 
            
            
        // })

   // return Promise with {token, userId, order, promo} data
}