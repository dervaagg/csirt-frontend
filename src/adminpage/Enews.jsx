import { Button, Upload, DatePicker, Form, Input } from "antd";
import { UploadOutlined, MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 20,
    },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 20,
      offset: 4,
    },
  },
};

export default function Enews() {

  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  return (
    <div className="flex flex-col bg-white min-h-full rounded-lg p-4 shadow-sm">
      <div className="mt-4 flex flex-col gap-2">
        <label className="text-black" id="address">
          Cover :{" "}
        </label>
        <Upload>
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <label className="text-black" id="address">
          Banner :
        </label>
        <Upload>
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <label className="text-black" id="address">
          Tanggal Upload :{" "}
        </label>
        <div>
          <DatePicker renderExtraFooter={() => "extra footer"} />
        </div>
      </div>

      <div className="mt-4">
        <label className="text-black" id="name">
          Source :
        </label>
        <input
          placeholder=""
          className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
          type="text"
        ></input>
      </div>

      <div className="mt-4">
        <label className="text-black" id="name">
          Judul :
        </label>
        <input
          placeholder=""
          className="w-full h-auto bg-zinc-300 rounded-md border-gray-700 text-black px-2 py-1"
          type="text"
        ></input>
      </div>

      <div className="mt-4 mb-4">
        <label className="text-black" id="address">
          Isi Konten :{" "}
        </label>
        <Form
          name="dynamic_form_item"
          {...formItemLayoutWithOutLabel}
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.List
            name="names"
            rules={[
              {
                validator: async (_, names) => {
                  if (!names || names.length < 2) {
                    return Promise.reject(new Error('Minimal Harus 2 Item'));
                  }
                },
              },
            ]}
          >
            {(fields, { add, remove }, { errors }) => (
              <>
                {fields.map((field, index) => (
                  <Form.Item
                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    label={index === 0 ? 'Paragraf' : ''}
                    required={false}
                    key={field.key}
                  >
                    <Form.Item
                      {...field}
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message: "Tolong masukan paragraf and sub judul atau hapus field ini",
                        },
                      ]}
                      noStyle
                    >
                      <Input
                        placeholder="Paragraf"
                        style={{
                          width: '60%',
                        }}
                      />
                    </Form.Item>
                    {fields.length > 1 ? (
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => remove(field.name)}
                      />
                    ) : null}
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    style={{
                      width: '60%',
                    }}
                    icon={<PlusOutlined />}
                  >
                    Tamabah Paragraf
                  </Button>
                  <Button
                    type="dashed"
                    onClick={() => {
                      add('Sub Judul', 0);
                    }}
                    style={{
                      width: '60%',
                      marginTop: '20px',
                    }}
                    icon={<PlusOutlined />}
                  >
                    Tambah Sub Judul
                  </Button>
                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </>
            )}
          </Form.List>
        </Form>
      </div>
    </div>
  );
}
