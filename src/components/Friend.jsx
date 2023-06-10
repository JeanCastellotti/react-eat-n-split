function Friend({ friend, selectedFriend, onSelectFriend }) {
  const isSelected = friend.id === selectedFriend?.id

  return (
    <div
      className={`flex items-center gap-5 rounded p-2 hover:bg-orange-100 ${
        isSelected && 'bg-orange-100'
      }`}
    >
      <img src={friend.image} className="h-12 w-12 rounded-full object-cover" />
      <div className="flex flex-col">
        <span className="font-medium">{friend.name}</span>
        {friend.balance === 0 && <span>You and {friend.name} are even</span>}
        {friend.balance < 0 && (
          <span className="text-red-500">
            You owe {friend.name} {Math.abs(friend.balance)}€
          </span>
        )}
        {friend.balance > 0 && (
          <span className="text-green-500">
            {friend.name} owes you {friend.balance}€
          </span>
        )}
      </div>
      <button
        className="ml-auto rounded bg-orange-300 px-3 py-1.5 font-medium"
        onClick={() => onSelectFriend(friend)}
      >
        {isSelected ? 'Close' : 'Select'}
      </button>
    </div>
  )
}

export default Friend
