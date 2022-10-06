import Action, {ActionStyleKinds} from './action'

export default function Title() {
  return <>
    <div className="p-6 flex-col border-2 rounded-xl">
      <label className="text-sm text-stone-500">Travel</label>
      <h2 className="text-2xl font-bold mb-2">Title goes here</h2>
      <p className="text-base mb-8 text-stone-700">Pair of boats on water in Lago di Braies and another pair of boats on water in Lago di Braies</p>
      <div className="grid grid-cols-2 gap-x-4 justify-items-stretch">
        <Action styleKind={ActionStyleKinds.light}>ACTION 1</Action>
        <Action styleKind={ActionStyleKinds.dark}>ACTION 2</Action>
      </div>
    </div>
  </>
}
