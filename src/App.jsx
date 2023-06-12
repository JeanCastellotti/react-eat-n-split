import { useState } from 'react'
import FormBill from './components/FormBill'
import Friends from './components/Friends'
import FormAddFriend from './components/FormAddFriend'
import Button from './components/Button'

function App() {
  const [friends, setFriends] = useState([])
  const [selectedFriend, setSelectedFriend] = useState(null)
  const [showAddFriend, setShowAddFriend] = useState(false)

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show)
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((selectedFriend) =>
      selectedFriend?.id === friend.id ? null : friend
    )
    setShowAddFriend(false)
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend])
    setShowAddFriend(false)
  }

  function handleUpdateFriend(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    )
    setSelectedFriend(null)
  }

  return (
    <div className="flex min-h-screen">
      <div className="m-auto grid w-full max-w-3xl grid-cols-2 gap-5">
        <div className="flex flex-col items-end gap-2">
          <Friends
            friends={friends}
            selectedFriend={selectedFriend}
            onSelectFriend={handleSelectedFriend}
          />
          {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
          <Button onClick={handleShowAddFriend}>
            {showAddFriend ? 'Close' : 'Add friend'}
          </Button>
        </div>
        {selectedFriend && (
          <FormBill
            selectedFriend={selectedFriend}
            onSplitBill={handleUpdateFriend}
            key={selectedFriend.id}
          />
        )}
      </div>
    </div>
  )
}

export default App
