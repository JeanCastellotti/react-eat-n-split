import { useState } from 'react'

function AddFriend({ onAddFriend }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/50')

  function handleSubmit(e) {
    e.preventDefault()

    if (!name || !image) return

    const id = crypto.randomUUID()

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    }

    setName('')
    setImage('https://i.pravatar.cc/50')

    onAddFriend(newFriend)
  }

  return (
    <form
      className="grid grid-cols-2 items-center gap-2 rounded bg-orange-100 p-4"
      onSubmit={handleSubmit}
    >
      <label>Friend name</label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        className="rounded border border-orange-200 py-2 text-center focus:outline-none"
      />

      <label>Image URL</label>
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="text"
        className="rounded border border-orange-200 py-2 text-center focus:outline-none"
      />
      <button className="col-end-3 rounded bg-orange-300 px-3 py-1.5 font-medium">
        Add
      </button>
    </form>
  )
}

export default AddFriend
