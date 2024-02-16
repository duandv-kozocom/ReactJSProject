export interface Group {
  userGroupId: number
  userGroupName: string
}
export interface Product {
  userId: number
  userName: string
  userUpdateClass: string
  group: Group
  userEmailAddress: string
  userStartDate: string
  userEndDate: string
  userLockoutFlg: number
}
