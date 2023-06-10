import { useState } from 'react'

function Bill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState('')
  const [userExpense, setUserExpense] = useState('')
  const [whoPays, setWhoPays] = useState('user')

  const friendExpense = bill ? bill - userExpense : ''

  function handleSubmit(e) {
    e.preventDefault()

    if (!bill || !userExpense) return

    onSplitBill(whoPays === 'user' ? friendExpense : -userExpense)
  }

  return (
    <div className="self-start rounded bg-orange-100 p-4">
      <span className="mb-5 block text-xl font-bold uppercase tracking-wider text-gray-700">
        Split a bill with {selectedFriend.name}
      </span>
      <form
        className="grid grid-cols-3 items-center gap-2"
        onSubmit={handleSubmit}
      >
        <label className="col-span-2 tracking-wider">Bill value</label>
        <input
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          type="number"
          className="rounded border border-orange-200 py-2 text-center focus:outline-none"
        />
        <label className="col-span-2 tracking-wider">Your expense</label>
        <input
          value={userExpense}
          onChange={(e) =>
            setUserExpense(
              Number(e.target.value) > bill
                ? userExpense
                : Number(e.target.value)
            )
          }
          type="number"
          className="rounded border border-orange-200 py-2 text-center focus:outline-none"
        />
        <label className="col-span-2 tracking-wider">
          {selectedFriend.name}'s expense
        </label>
        <input
          value={friendExpense === 0 ? '' : friendExpense}
          type="text"
          disabled
          className="rounded border border-orange-200 py-2 text-center focus:outline-none"
        />
        <label className="col-span-2 tracking-wider">
          Who is paying the bill?
        </label>
        <select
          value={whoPays}
          onChange={(e) => setWhoPays(e.target.value)}
          className="rounded border border-orange-200 py-2 text-center focus:outline-none"
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
        <button className="col-end-4 rounded bg-orange-300 py-1.5 font-semibold">
          Split bill
        </button>
      </form>
    </div>
  )
}

export default Bill
