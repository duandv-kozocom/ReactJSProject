import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useForm } from 'react-hook-form'

// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: 'Username must be at least 2 characters.',
//   }),
// })

export function Login() {
  const form = useForm()

  // const [loading, setLoading] = useState({
  //   submit: false,
  // })

  // const validationSchema = yup.object().shape({
  //   username: yup.string().required('username is required'),
  //   password: yup.string().required('password is required'),
  // })

  // const {
  //   handleSubmit,
  //   control,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(validationSchema),
  // })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const onSubmit = async (data: any) => {
  //   if (loading.submit) return
  //   setLoading({ ...loading, submit: true })
  //   try {
  //     const payload = {
  //       username: data.username,
  //       password: data.password,
  //     }
  //     await authApiService.login(payload)
  //     reporter.success('Created Successfully')
  //   } catch (error) {
  //     reporter.error(error)
  //   } finally {
  //     setLoading({ ...loading, submit: false })
  //   }
  // }

  return (
    <div className="text-center">
      <div className="relative before:h-[1px] before:w-[70px] before:contents-['] before:absolute before:top-1/2 before:left-0 before:bg-[#7e7e7e] after:h-[1px] after:w-[70px] after:contents-['] after:absolute after:top-1/2 after:right-0 after:bg-[#7e7e7e]">
        <img className="mx-auto block my-[30px]" src="./images/logo.png" alt="logo" />
      </div>
      <Form {...form}>
        <form className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="ユーザーグループ" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@google.com">システム管理者</SelectItem>
                    <SelectItem value="m@support.com">管理者 </SelectItem>
                    <SelectItem value="m@support1.com">事務担当者</SelectItem>
                    <SelectItem value="m@support2.com">営業担当者 </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="ユーザー" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">admin </SelectItem>
                    <SelectItem value="m@google.com">tester</SelectItem>
                    <SelectItem value="m@support.com">devops</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input className="boxShadow-first" placeholder="パスワード" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="mt-[25px]" type="submit">
            ログイン
          </Button>
        </form>
        <p className="mt-[25px]">※本システムはGoogleChromeでご利用ください。</p>
      </Form>
    </div>
  )
}
