import Title from '@/components/common/Title'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ROUTE_PATH } from '@/constants/routes'
import { Product } from '@/pages/Product/types/Product'
import { updateUserSchema } from '@/pages/Product/validators'
import userApiService from '@/services/userApiService'
import reporter from '@/utils/reporter'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import useFormPersist from 'react-hook-form-persist'

const userGroup = [
  { id: '1', value: 'システム管理者' },
  { id: '2', value: '管理者' },
  { id: '3', value: '事務担当者' },
  { id: '4', value: '営業担当者' },
]

export function ProductEditing() {
  const [user, setUser] = useState<Product>()
  const navigate = useNavigate()
  const [loading, setLoading] = useState({
    submit: false,
  })

  const form = useForm({
    resolver: yupResolver(updateUserSchema),
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      userId: '',
      userName: '',
      userGroupId: '',
      userEmailAddress: '',
      userEmailAddressConfirm: '',
      userStartDate: '',
      userEndDate: '',
      userPassword: '',
      userPasswordConfirm: '',
      userNotificationStopFlg: false,
    },
  })

  useEffect(() => {
    form.reset({
      userId: user?.userId as unknown as string,
      userName: user?.userName,
      userGroupId: user?.group?.userGroupId as unknown as string,
      userEmailAddress: user?.userEmailAddress,
      userEmailAddressConfirm: user?.userEmailAddress,
      userStartDate: user?.userStartDate,
      userEndDate: user?.userEndDate,
      userPassword: '',
      userPasswordConfirm: '',
      userNotificationStopFlg: false,
    })
  }, [form, user])

  const { id } = useParams()

  useEffect(() => {
    const fetchUser = async () => {
      if (!id) return
      try {
        const data = await userApiService.getUser(id)
        setUser(data.data as unknown as Product)
      } catch (error) {
        console.error('Something went wrong')
      }
    }
    fetchUser()
  }, [id])

  const { handleSubmit, watch, setValue } = form

  useFormPersist('form-user', { watch, setValue, storage: window.localStorage })

  const onSubmit = async () => {
    if (loading.submit) return
    setLoading({ ...loading, submit: true })
    try {
      navigate(ROUTE_PATH.PRODUCTS.CREATE.replace(':id', user?.userId.toString() as string))
    } catch (error: any) {
      reporter.error(error)
    } finally {
      setLoading({ ...loading, submit: false })
    }
  }

  if (!user) return null

  return (
    <>
      <Helmet>
        <title>ユーザー編集</title>
        <meta name="description" content="ユーザー編集" />
      </Helmet>
      <div className="">
        <section className="">
          <Title>ユーザー編集</Title>
        </section>
        <div className="bg-white py-6 border">
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-5">
                <FormItem className="flex">
                  <FormLabel className="w-[35%]">
                    <p className="pr-2 flex items-center justify-end leading-[34px]">ユーザーID</p>
                  </FormLabel>
                  <FormControl className="w-[45%]">
                    <FormItem className="">
                      <Input disabled value={user?.userId} />
                    </FormItem>
                  </FormControl>
                </FormItem>
                <FormField
                  control={form.control}
                  name="userName"
                  render={({ field }) => (
                    <FormItem className="flex">
                      <FormLabel className="w-[35%]">
                        <p className="pr-2 flex items-center justify-end leading-[34px]">
                          ユーザー名 <span className="text-red-600 text-lg">*</span>
                        </p>
                      </FormLabel>
                      <FormControl className="w-[45%]">
                        <FormItem className="">
                          <Input {...field} />
                          <FormMessage className="my-2.5 whitespace-nowrap" />
                        </FormItem>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="userGroupId"
                  render={({ field }) => (
                    <FormItem className="flex items-center">
                      <FormLabel className="w-[35%]">
                        <p className="pr-2 flex items-center justify-end leading-[34px]">
                          ユーザーグループ <span className="text-red-600 text-lg">*</span>
                        </p>
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        value={field.value}
                      >
                        <FormControl className="w-[45%]">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectGroup>
                          <SelectContent>
                            <SelectLabel></SelectLabel>
                            {userGroup.map(item => (
                              <SelectItem key={item.id} value={item.id}>
                                {item.value}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </SelectGroup>
                        <FormMessage className="mt-5" />
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="userEmailAddress"
                  render={({ field }) => (
                    <FormItem className="flex">
                      <FormLabel className="w-[35%]">
                        <p className="pr-2 flex items-center justify-end leading-[34px]">
                          メールアドレス
                        </p>
                      </FormLabel>
                      <FormControl className="w-[45%]">
                        <FormItem className="">
                          <Input {...field} />
                          <FormMessage className="my-2.5 whitespace-nowrap" />
                        </FormItem>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="userEmailAddressConfirm"
                  render={({ field }) => (
                    <FormItem className="flex items-center">
                      <FormLabel className="w-[35%]" />
                      <FormControl className="w-[45%]">
                        <FormItem className="">
                          <div className="flex items-center relative">
                            <Input {...field} />
                            <span className="whitespace-nowrap absolute right-0 translate-x-full">
                              （確認用）
                            </span>
                          </div>
                          <FormMessage className="my-2.5 whitespace-nowrap" />
                        </FormItem>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="flex justify-items-center content-center mb-2">
                  <FormLabel className="w-[35%] text-right pr-4 leading-[34px]">
                    <p className="pr-2 flex items-center justify-end leading-[34px]">
                      ユーザー有効期間 <span className="text-red-600 text-lg">*</span>
                    </p>
                  </FormLabel>

                  <div className="w-[45%]">
                    <div className="flex gap-2 content-center items-center">
                      <div className="mb-2 flex-1">
                        <FormField
                          control={form.control}
                          name="userStartDate"
                          render={({ field }) => (
                            <FormItem className="flex items-center">
                              <FormControl className="w-full">
                                <FormItem className="">
                                  <Input {...field} />
                                  <FormMessage className="my-2.5 whitespace-nowrap" />
                                </FormItem>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="">
                        <span className="">～</span>
                      </div>
                      <div className="mb-2 flex-1">
                        <FormField
                          control={form.control}
                          name="userEndDate"
                          render={({ field }) => (
                            <FormItem className="flex items-center">
                              <FormControl className="w-full">
                                <FormItem className="">
                                  <Input {...field} />
                                  <FormMessage className="my-2.5 whitespace-nowrap" />
                                </FormItem>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-[35%]" />
                  <div className="w-[45%] text-right">※無期限の場合は 9999999/12/31 をコピー</div>
                </div>
                <div className="form-group flex justify-items-center content-center mb-2">
                  <FormLabel className="w-[35%] text-right pr-4 leading-[34px]">
                    パスワード再設定
                  </FormLabel>
                  <div className="w-[45%] flex items-center gap-4">
                    <div className="flex-1">
                      <FormField
                        control={form.control}
                        name="userPassword"
                        render={({ field }) => (
                          <FormItem className="flex items-center">
                            <FormControl className="w-full">
                              <FormItem className="">
                                <Input {...field} />
                                <FormMessage className="my-2.5 whitespace-nowrap" />
                              </FormItem>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="userNotificationStopFlg"
                      render={({ field }) => (
                        <FormItem className="flex w-[200px] items-center">
                          <FormControl>
                            <Checkbox onCheckedChange={field.onChange} />
                          </FormControl>
                          <FormLabel className="flex cursor-pointer items-center">
                            <span className="text-[13px] text-black font-normal pl-2">
                              パスワード通知メールを送る
                            </span>
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                    {/* <label className="">
                      <input type="checkbox" name="" />
                      <span className="ml-2">パスワード通知メールを送る</span>
                    </label> */}
                  </div>
                </div>
                <div className="form-group flex justify-items-center content-center mb-2">
                  <FormLabel className="w-[35%] text-right pr-4 leading-[34px]"></FormLabel>
                  <div className="w-[45%] flex items-center gap-4">
                    <div className="flex-1">
                      <FormField
                        control={form.control}
                        name="userPasswordConfirm"
                        render={({ field }) => (
                          <FormItem className="flex items-center">
                            <FormControl className="w-full">
                              <FormItem className="">
                                <Input {...field} />
                                <FormMessage className="my-2.5 whitespace-nowrap" />
                              </FormItem>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="w-[200px]">
                      <span className="">（確認用）</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-2 mt-5 justify-center">
                <Button variant="light">戻る</Button>
                <Button type="submit" variant="success">
                  登録
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  )
}
