/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';
import Cloud from '/cloud.svg';
import Email from '/envelope.svg';

function PersonalInfo({ formData, updateFormData, showValidation }) {
  const [image, setImage] = useState('');
  const [imageIsUploading, setImageIsUploading] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    imageUrl: '',
    specialRequest: '',
  });
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (showValidation) {
      validateAllFields();
    }
  }, [showValidation]);

  const validateForm = (field, value) => {
    let newErrors = { ...errors };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    switch (field) {
      case 'name':
        if (!value?.trim()) {
          newErrors.name = 'Name is required';
        } else if (value.trim().length < 2) {
          newErrors.name = 'Name must be at least 2 characters';
        } else {
          newErrors.name = '';
        }
        break;
      case 'email':
        if (!value) {
          newErrors.email = 'Email is required';
        } else if (!emailRegex.test(value)) {
          newErrors.email = 'Please enter a valid email address';
        } else {
          newErrors.email = '';
        }
        break;
      case 'imageUrl':
        if (!value) {
          newErrors.imageUrl = 'Profile photo is required';
        } else {
          newErrors.imageUrl = '';
        }
        break;
      case 'specialRequest':
        if (!value?.trim()) {
          newErrors.specialRequest = 'Please make a special request';
        } else if (value.trim().length < 10) {
          newErrors.specialRequest =
            'Special request must be at least 10 characters';
        } else {
          newErrors.specialRequest = '';
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return newErrors[field];
  };

  const validateAllFields = () => {
    const newErrors = {
      name: validateForm('name', formData.name),
      email: validateForm('email', formData.email),
      imageUrl: validateForm('imageUrl', formData.imageUrl),
      specialRequest: validateForm('specialRequest', formData.specialRequest),
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleInputChange = (field, value) => {
    updateFormData({ [field]: value });
    if (showValidation) {
      validateForm(field, value);
    }
  };

  const handleImageUpload = (files) => {
    if (!files || !files[0]) return;

    setImageIsUploading(true);
    const formData = new FormData();

    formData.append('file', files[0]);
    formData.append('upload_preset', 'zkuo25pr');
    fetch('https://api.cloudinary.com/v1_1/dih3cssrq/image/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setImage(data.secure_url);
        updateFormData({ imageUrl: data.secure_url });
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
      })
      .finally(() => {
        setImageIsUploading(false);
      });
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div className="mx-auto mt-8 min-h-[320px] max-w-[556px] rounded-3xl border border-fextBg bg-ticketBg text-white">
        <h2 className="font-roboto mb-8 mt-6 pl-6 text-base font-bold">
          Upload Profile Photo
        </h2>

        <div className="mx-auto flex h-[200px] max-w-[508px] items-center bg-imageBg">
          <div
            className="relative mx-auto flex aspect-square min-h-[200px] max-w-[240px] cursor-pointer items-center justify-center overflow-hidden rounded-3xl border-4 border-borderButtom bg-borderBg"
            onClick={handleClick}
          >
            {imageIsUploading ? (
              <div className="flex flex-col items-center justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
                <p className="font-roboto mt-4 text-gray-400">Uploading...</p>
              </div>
            ) : image ? (
              <img
                src={image}
                alt="Uploaded"
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div className="flex flex-col items-center justify-center">
                <img src={Cloud} alt="" />
                <p className="font-roboto mt-2 text-center text-base text-stone-200">
                  Drag & drop or click to <br /> upload
                </p>
              </div>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            onChange={(e) => handleImageUpload(e.target.files)}
            className="hidden"
            accept="image/*"
          />
        </div>
      </div>

      <div className="mb-8 mt-8 flex h-[4px] w-full rounded-full">
        <div className="h-full w-[100%] bg-borderBg"></div>
      </div>

      <form className="mt-6">
        <input type="hidden" value={image} name="avatar" />

        <label className="font-roboto mb-1 block text-base text-stone-200">
          Enter your name
        </label>
        <input
          type="text"
          required
          className={`font-roboto h-12 w-full rounded-xl border ${
            showValidation && errors.name ? 'border-red-500' : 'border-fextBg'
          } bg-subBackground p-2 text-stone-300 outline-none active:outline-none`}
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          onBlur={(e) => showValidation && validateForm('name', e.target.value)}
        />
        {showValidation && errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}

        <label className="font-roboto mb-1 mt-4 block text-base text-stone-200">
          Enter your email *
        </label>
        <div
          className={`flex h-12 items-center rounded-xl border ${
            showValidation && errors.email ? 'border-red-500' : 'border-fextBg'
          } bg-subBackground p-2`}
        >
          <img src={Email} alt="" className="pl-2 pr-2" />
          <input
            type="email"
            required
            className="font-roboto w-full bg-transparent text-stone-300 outline-none active:outline-none"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            onBlur={(e) =>
              showValidation && validateForm('email', e.target.value)
            }
            placeholder="hello@avioflagos.io"
          />
        </div>
        {showValidation && errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}

        <label className="font-roboto mb-1 mt-4 block text-base text-stone-200">
          Special request?
        </label>
        <textarea
          className={`font-roboto w-full resize-none rounded-xl border ${
            showValidation && errors.specialRequest
              ? 'border-red-500'
              : 'border-fextBg'
          } bg-subBackground p-2 text-stone-300 outline-none active:outline-none`}
          rows="5"
          required
          value={formData.specialRequest}
          placeholder="Textarea"
          onChange={(e) => handleInputChange('specialRequest', e.target.value)}
          onBlur={(e) =>
            showValidation && validateForm('specialRequest', e.target.value)
          }
        />
        {showValidation && errors.specialRequest && (
          <p className="mt-1 text-sm text-red-500">{errors.specialRequest}</p>
        )}
      </form>
    </>
  );
}

export default PersonalInfo;
