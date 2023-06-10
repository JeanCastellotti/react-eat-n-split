import Friend from './Friend'

function Friends({ friends, selectedFriend, onSelectFriend }) {
  return (
    <div className="mb-5 space-y-5 self-stretch">
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          onSelectFriend={onSelectFriend}
        />
      ))}
    </div>
  )
}

export default Friends
