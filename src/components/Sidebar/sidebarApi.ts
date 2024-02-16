import { ROUTE_PATH } from '@/constants/routes'
import {
  BanknotesIcon,
  BookOpenIcon,
  BuildingLibraryIcon,
  BuildingOfficeIcon,
  CloudArrowDownIcon,
  Cog6ToothIcon,
  CurrencyDollarIcon,
  HomeIcon,
  InformationCircleIcon,
  UserGroupIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { GiftIcon } from 'lucide-react'

export const navList = [
  {
    menuItems: [{ title: 'ダッシュボード', path: '/dashboard', icon: HomeIcon }],
  },
  {
    groupTitle: '顧客管理',
    menuItems: [
      {
        title: '見込み客・会員管理',
        icon: UserGroupIcon,
        subMenuItems: [
          { title: '見込み客・会員管理', path: '/customers?_clear=1&_no_search=1' },
          { title: '紹介者管理', path: '/introducer?_clear=1&_no_search=1' },
          { title: '会員紹介者管理', path: '/introducer-of-customers?_clear=1&_no_search=1' },
        ],
      },
    ],
  },
  {
    groupTitle: '受注・申込・契約管理',
    menuItems: [
      {
        title: ' 受注・申込・契約管理 ',
        icon: CurrencyDollarIcon,
        subMenuItems: [
          { title: '出資受注・申込管理', path: '/customers?_clear=1&_no_search=1' },
          { title: '買取・クーリングオフ管理', path: '/introducer?_clear=1&_no_search=1' },
          { title: '譲渡・相続管理', path: '/introducer-of-customers?_clear=1&_no_search=1' },
          { title: '契約取引管理', path: '/introducer-of-customers?_clear=1&_no_search=1' },
        ],
      },
      {
        title: '分配・償還管理',
        icon: GiftIcon,
        path: '/dividend',
      },
      {
        title: ' 入金・出金管理 ',
        icon: BanknotesIcon,
        subMenuItems: [
          { title: '入金・出金実績管理', path: '/customers?_clear=1&_no_search=1' },
          { title: '入金・出金予定管理', path: '/introducer?_clear=1&_no_search=1' },
          {
            title: '入金・出金メンテナンス',
            path: '/introducer-of-customers?_clear=1&_no_search=1',
          },
          { title: '入金ファイル取込', path: '/introducer-of-customers?_clear=1&_no_search=1' },
          { title: '入金ファイル取消', path: '/introducer-of-customers?_clear=1&_no_search=1' },
          { title: '入金一括消込', path: '/introducer-of-customers?_clear=1&_no_search=1' },
          { title: '入金個別消込', path: '/introducer-of-customers?_clear=1&_no_search=1' },
          { title: '出金ファイル作成', path: '/introducer-of-customers?_clear=1&_no_search=1' },
          { title: '出金ファイル取消', path: '/introducer-of-customers?_clear=1&_no_search=1' },
          { title: '振込手数料按分管理', path: '/introducer-of-customers?_clear=1&_no_search=1' },
          { title: '出金一括消込', path: '/introducer-of-customers?_clear=1&_no_search=1' },
          { title: '紹介手数料管理', path: '/introducer-of-customers?_clear=1&_no_search=1' },
        ],
      },
      {
        title: '会員・取引データ管理',
        icon: CloudArrowDownIcon,
        path: '/dividend',
      },
    ],
  },
  {
    groupTitle: '帳票・商品管理',
    menuItems: [
      {
        title: ' 帳票・文書管理 ',
        icon: BookOpenIcon,
        subMenuItems: [{ title: '帳票・文書管理', path: '/customers?_clear=1&_no_search=1' }],
      },
      {
        title: ' 商品管理 ',
        icon: BuildingOfficeIcon,
        subMenuItems: [
          { title: '商品管理', path: '/customers?_clear=1&_no_search=1' },
          { title: '商品構成管理', path: '/introducer?_clear=1&_no_search=1' },
          {
            title: '対象不動産管理',
            path: '/introducer-of-customers?_clear=1&_no_search=1',
          },
          { title: '対象不動産KPI', path: '/introducer-of-customers?_clear=1&_no_search=1' },
          { title: '商品紹介手数料管理', path: '/introducer-of-customers?_clear=1&_no_search=1' },
        ],
      },
    ],
  },
  {
    groupTitle: 'お知らせ管理',
    menuItems: [
      {
        title: 'お知らせ管理',
        icon: InformationCircleIcon,
        path: '/dividend',
      },
    ],
  },
  {
    groupTitle: 'マスタメンテナンス',
    menuItems: [
      {
        title: 'ユーザー管理',
        icon: UserIcon,
        path: ROUTE_PATH.PRODUCTS.LIST,
      },
      {
        title: '金融機関管理',
        icon: BuildingLibraryIcon,
        path: '/dividend',
      },
      {
        title: 'システム',
        icon: Cog6ToothIcon,
        subMenuItems: [
          { title: '金融機関管理', path: '/customers?_clear=1&_no_search=1' },
          { title: '金融機関管理', path: '/introducer?_clear=1&_no_search=1' },
          { title: '金融機関管理', path: '/introducer-of-customers?_clear=1&_no_search=1' },
        ],
      },
    ],
  },
]
