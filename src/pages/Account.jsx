import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Container from '../components/Container'
import BreadCrumbs from '../components/BreadCrumbs'

const initialFormData = {
  firstName: '', lastName: '', email: '', address: '',
  currentPassword: '', newPassword: '', confirmPassword: '',
}

const profileFields = [['firstName', 'First Name'], ['lastName', 'Last Name'], ['email', 'Email', 'email'], ['address', 'Address']]
const passwordFields = [['currentPassword', 'Current Password'], ['newPassword', 'New Password'], ['confirmPassword', 'Confirm New Password']]
const menuGroups = [
  ['Manage My Account', ['My Profile', 'Address Book', 'My Payment Options']],
  ['My Orders', ['My Returns', 'My Cancellations']],
]
const inputClass = 'mt-2 h-12.5 w-full rounded bg-[#F5F5F5] px-4 text-base outline-none placeholder:text-black/50'

const FormInput = ({ name, label, type = 'text', formData, onChange, hideLabel = false }) => {
  const input = <input type={type} name={name} value={formData[name]} onChange={onChange} placeholder={label} className={inputClass} />
  return hideLabel ? input : <label className='text-base'>{label}{input}</label>
}

const AccountMenu = ({ title, items, activeSection, onSelect }) => <section><h2 className='text-base font-medium'>{title}</h2><ul className='mt-4 space-y-2 pl-4'>{items.map((item) => <li key={item}><button type='button' onClick={() => onSelect(item)} className={`cursor-pointer text-left text-base ${activeSection === item ? 'text-primary' : 'text-black/50'}`}>{item}</button></li>)}</ul></section>

const Account = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [activeSection, setActiveSection] = useState('My Profile')

  const handleChange = ({ target }) => {
    setFormData((currentData) => ({ ...currentData, [target.name]: target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error('New passwords do not match')
      return
    }
    toast.success('Profile updated successfully')
  }

  const welcomeName = `${formData.firstName} ${formData.lastName}`.trim() || 'User'
  return (
    <main className='py-12 sm:py-20'>
      <Container>
        <div className='flex items-center justify-between text-xs text-black/50 sm:text-sm'>
          <BreadCrumbs />
          <p className='text-right text-black'>Welcome! <span className='text-primary'>{welcomeName}</span></p>
        </div>
        <div className='mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[170px_minmax(0,870px)] lg:gap-24'>
          <aside aria-label='Account navigation'>
            <div className='space-y-5'>{menuGroups.map(([title, items]) => <AccountMenu key={title} title={title} items={items} activeSection={activeSection} onSelect={setActiveSection} />)}</div>
            <h2 className='mt-5 text-base font-medium'>My WishList</h2>
          </aside>

          <section className='min-h-157.5 max-w-217.5 rounded bg-white p-6 shadow-[0_1px_12px_rgba(0,0,0,0.05)] sm:p-10'>
            <h1 className='text-xl font-medium leading-7 text-primary'>Edit Your Profile</h1>
            {activeSection === 'My Profile' ? (
              <form onSubmit={handleSubmit} className='mt-4 max-w-177.5'>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-6'>
                  {profileFields.map(([name, label, type]) => <FormInput key={name} name={name} label={label} type={type} formData={formData} onChange={handleChange} />)}
                </div>
                <fieldset className='mt-5'>
                  <legend className='text-base'>Password Changes</legend>
                  <div className='mt-2 space-y-4'>
                    {passwordFields.map(([name, label]) => <FormInput key={name} name={name} label={label} type='password' hideLabel formData={formData} onChange={handleChange} />)}
                  </div>
                </fieldset>
                <div className='mt-8 flex items-center justify-end gap-8'>
                  <button type='button' onClick={() => setFormData(initialFormData)} className='cursor-pointer text-base leading-6'>Cancel</button>
                  <button type='submit' className='h-14 w-full max-w-53.5 cursor-pointer rounded-sm bg-primary text-base font-medium leading-6 text-white'>Save Changes</button>
                </div>
              </form>
            ) : (
              <p className='mt-8 text-base text-black/50'>{activeSection} is not available yet.</p>
            )}
          </section>
        </div>
      </Container>
    </main>
  )
}

export default Account