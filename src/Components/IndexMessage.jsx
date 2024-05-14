import { useState, useEffect } from 'react'
import { MdMoreHoriz, MdArrowUpward, MdEdit, MdArrowDropDown, MdSearch } from 'react-icons/md'
import AdditionalDropdown from './additionaldropdowm'

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [profileImage, setProfileImage] = useState(null)
  const [hoveredIcon, setHoveredIcon] = useState(null)
  const [arrowIcon, setArrowIcon] = useState(<MdArrowUpward />)
  const [dropdownHeight, setDropdownHeight] = useState(0)
  const [randomProfiles, setRandomProfiles] = useState([])
  const [dropdownTop, setDropdownTop] = useState(0)
  const accessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzI0NTE2N2U1MzAwMTVmYTY5N2IiLCJpYXQiOjE3MTU1ODU4NjAsImV4cCI6MTcxNjc5NTQ2MH0.cEKb2krnNiZwilYZItlDUMreBrz6t-HFPnjBGJ3WWC0'
  const [isMoreIconHovered, setIsMoreIconHovered] = useState(false)
  const [isEditIconHovered, setIsEditIconHovered] = useState(false)
  const [additionalDropdownOpen, setAdditionalDropdownOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [inputClicked, setInputClicked] = useState(false)

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        if (response.ok) {
          const data = await response.json()
          setProfileImage(data.image)
        } else {
          console.error('Error fetching profile image:', response.status)
        }
      } catch (error) {
        console.error('Fetch error:', error)
      }
    }

    fetchProfileImage()
  }, [accessToken])

  useEffect(() => {
    const fetchRandomProfiles = async () => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/?search=${encodeURIComponent(searchTerm)}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        if (response.ok) {
          const data = await response.json()
          setRandomProfiles(data.slice(0, 8))
        } else {
          console.error('Error fetching random profiles:', response.status)
        }
      } catch (error) {
        console.error('Fetch error:', error)
      }
    }

    fetchRandomProfiles()
  }, [accessToken, searchTerm])

  useEffect(() => {
    if (isOpen) {
      const windowHeight = window.innerHeight
      const dropdownHeightWithMargin = dropdownHeight + 44
      if (windowHeight - dropdownHeightWithMargin < 0) {
        setDropdownTop(0)
      } else {
        setDropdownTop(windowHeight - dropdownHeightWithMargin)
      }
    }
  }, [isOpen, dropdownHeight])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
    setArrowIcon(isOpen ? <MdArrowUpward /> : <MdArrowDropDown />)
  }

  const handleMoreOptionsClick = (e) => {
    e.stopPropagation()
    setAdditionalDropdownOpen(!additionalDropdownOpen)
  }

  const handleEditClick = () => {}

  const handleCloseDropdown = () => {
    setIsOpen(false)
    setArrowIcon(<MdArrowUpward />)
  }

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleInputClick = (e) => {
    e.stopPropagation()
    setInputClicked(true)
  }

  const iconStyle = {
    marginLeft: '2rem',
    borderRadius: '50%',
    padding: '5px',
    fontSize: '24px',
  }

  const iconHoverStyle = {
    ...iconStyle,
    backgroundColor: '#ccc',
  }

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: isOpen ? `${dropdownTop}px` : 'auto',
          bottom: isOpen ? 'auto' : 0,
          right: 15,
          zIndex: 998,
        }}
      >
        <div
          className="border-bottom-0"
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            background: hoveredIcon ? '#fafafa' : 'white',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            borderRadius: '4px',
            padding: '8px',
            zIndex: 1,
          }}
        >
          <div style={{ marginRight: '8px' }}>
            {profileImage && (
              <img src={profileImage} alt="Profile" style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
            )}
          </div>
          <button
            onClick={toggleDropdown}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              width: '100%',
            }}
            onMouseEnter={() => setHoveredIcon('more')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            Messaggistica
            <MdMoreHoriz
              style={{
                ...(isMoreIconHovered ? iconHoverStyle : iconStyle),
                marginRight: '-2rem',
                marginLeft: '4rem',
              }}
              onClick={handleMoreOptionsClick}
              onMouseEnter={() => setIsMoreIconHovered(true)}
              onMouseLeave={() => setIsMoreIconHovered(false)}
            />
            <MdEdit
              style={isEditIconHovered ? iconHoverStyle : iconStyle}
              onClick={handleEditClick}
              onMouseEnter={() => setIsEditIconHovered(true)}
              onMouseLeave={() => setIsEditIconHovered(false)}
            />
            {arrowIcon}
          </button>
        </div>
        <div
          className="dropdown-container"
          style={{ position: 'relative', top: isOpen ? '0' : 'auto', transition: 'top 0.3s', width: '100%' }}
        >
          {isOpen && (
            <div
              style={{
                width: '100%',
                border: '1px solid #ccc',
                backgroundColor: '#fff',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                borderRadius: '4px',
                padding: '8px',
                height: "70vh",
                overflowY: "auto"
              }}
              ref={(ref) => {
                if (ref) {
                  const height = ref.getBoundingClientRect().height
                  setDropdownHeight(height)
                }
              }}
            >
              <div style={{ marginBottom: '8px', position: 'relative', display: 'flex', alignItems: 'center' }}>
                <input
                  type="text"
                  placeholder="Cerca un messaggio"
                  value={searchTerm}
                  onChange={handleSearchInputChange}
                  onClick={handleInputClick}
                  style={{
                    paddingLeft: '2rem',
                    paddingRight: '1rem',
                    width: '100%',
                    border: 'none',
                    borderBottom: '1px solid #ccc',
                    outline: 'none',
                    cursor: isOpen ? 'text' : 'pointer',
                  }}
                  readOnly={!isOpen}
                />
                <MdSearch style={{ position: 'absolute', left: '0.5rem', fontSize: '20px', color: '#999' }} />
              </div>
              {randomProfiles.map((profile, index) => (
                <div key={profile._id} style={{ marginBottom: '8px' }}>
                  <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={profile.image}
                      alt="Profile"
                      style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }}
                    />
                    <div>
                      <div>
                        {profile.name} {profile.surname}
                      </div>
                      <div className="small text-muted">{profile.bio}</div>
                    </div>
                  </div>
                  {index !== randomProfiles.length - 1 && <hr />}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {additionalDropdownOpen && (
        <AdditionalDropdown isOpen={additionalDropdownOpen} onClose={() => setAdditionalDropdownOpen(false)} />
      )}
      {isOpen && !inputClicked && (
        <div
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 0 }}
          onClick={handleCloseDropdown}
        ></div>
      )}
    </>
  )
}

export default Dropdown
